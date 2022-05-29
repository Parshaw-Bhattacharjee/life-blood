import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';

import { createContext, useState, useEffect } from 'react';
import { useContext } from 'react';
import { auth, db } from '../firebase';
import { userTypes } from '../constants/constants';
import { useLoader } from './loader-context';
import {
  addDoc,
  collection,
  onSnapshot,
  query,
  where,
} from 'firebase/firestore';

const authContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [userId, setUserId] = useState(null);
  const [user, setUser] = useState(null);
  const [userType, setUserType] = useState(null);
  const { setShowLoader } = useLoader();

  useEffect(() => {
    if (token && userId && userType) {
      (async () => {
        const q = query(collection(db, userType), where('uid', '==', userId));
        onSnapshot(q, (data) => {
          setUser(data.docs[0].data());
        });
      })();
    }
  }, [token, userId, userType]);

  const donorSignupHandler = async (name, email, password, bloodgroup) => {
    if (token) logoutHandler();

    setShowLoader(true);
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const user = res.user;
      setUserId(user?.uid);
      setUserType(userTypes.DONOR);
      setToken(user?.accessToken);

      await addDoc(collection(db, userTypes.DONOR), {
        uid: user.uid,
        name,
        bloodgroup,
        email,
      });
    } catch (err) {
      console.log(err);
    } finally {
      setShowLoader(false);
    }
  };
  const bloodBankSignupHandler = async (name, email, location, password) => {
    if (token) logoutHandler();

    setShowLoader(true);
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const user = res.user;
      setUserId(user?.uid);
      setUserType(userTypes.BLOOD_BANK);
      setToken(user?.accessToken);

      await addDoc(collection(db, userTypes.BLOOD_BANK), {
        uid: user.uid,
        name,
        location,
        donorRequest: [],
        bloodData: [],
        email,
      });
    } catch (err) {
      console.log(err);
    } finally {
      setShowLoader(false);
    }
  };
  const hospitalSignupHandler = async (name, email, location, password) => {
    if (token) logoutHandler();
    setShowLoader(true);
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const user = res.user;
      setUserId(user?.uid);
      setUserType(userTypes.HOSPITAL);
      setToken(user?.accessToken);

      await addDoc(collection(db, userTypes.HOSPITAL), {
        uid: user.uid,
        name,
        location,
        pendingRequests: [],
        history: [],
        email,
      });
    } catch (err) {
      console.log(err);
    } finally {
      setShowLoader(false);
    }
  };

  const loginHandler = async (email, password, userType) => {
    if (token) logoutHandler();
    setShowLoader(true);
    try {
      const res = await signInWithEmailAndPassword(auth, email, password);
      const user = res.user;
      setToken(user?.accessToken);
      setUserId(user?.uid);
      setUserType(userType);
    } catch (err) {
      console.log(err);
    } finally {
      setShowLoader(false);
    }
  };
  const logoutHandler = () => {
    signOut(auth);
    setToken('');
    setUser(null);
    setUserType(null);
    setUserId('');
  };

  return (
    <authContext.Provider
      value={{
        donorSignupHandler,
        loginHandler,
        hospitalSignupHandler,
        bloodBankSignupHandler,
        logoutHandler,
        user,
        userType,
        token,
      }}
    >
      {children}
    </authContext.Provider>
  );
};

export const useAuth = () => useContext(authContext);
