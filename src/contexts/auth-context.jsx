import { async } from '@firebase/util';
import { data } from 'autoprefixer';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import {
  addDoc,
  collection,
  onSnapshot,
  query,
  where,
} from 'firebase/firestore';
import { createContext, useState, useEffect } from 'react';
import { auth, db } from '../../firebase';
import { useLoader } from './loader-context';

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
  }, [token]);

  const donorSignupHandler = async (name, email, password, bloodgroup) => {
    setShowLoader(true);
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const user = res.user;
      setUserId(user?.uid);
      setUserType('users');
      setToken(user?.accessToken);

      await addDoc(collection(db, 'donors'), {
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
  const bloodBankSignupHandler = async (name, email, password) => {
    setShowLoader(true);
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const user = res.user;
      setUserId(user?.uid);
      setUserType('blood_bank');
      setToken(user?.accessToken);

      await addDoc(collection(db, 'blood_bank'), {
        uid: user.uid,
        name,
        bloodData: [],
        email,
      });
    } catch (err) {
      console.log(err);
    } finally {
      setShowLoader(false);
    }
  };
  const hospitalSignupHandler = async (name, email, password) => {
    setShowLoader(true);
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const user = res.user;
      setUserId(user?.uid);
      setUserType('hospital');
      setToken(user?.accessToken);

      await addDoc(collection(db, 'hospital'), {
        uid: user.uid,
        name,
        pendingRequests: [],
        email,
      });
    } catch (err) {
      console.log(err);
    } finally {
      setShowLoader(false);
    }
  };

  const loginHandler = async (email, password, userType) => {
    setShowLoader(true);
    try {
      const res = await signInWithEmailAndPassword(auth, email, password);
      const user = res.user;
      setUserId(user?.uid);
      setUserType(userType);
      setToken(user?.accessToken);
    } catch (err) {
      console.log(err);
    } finally {
      setShowLoader(false);
    }
  };
  const logoutHandler = () => {
    signOut(auth);
    setToken('');
    setUserId('');
    setUser(null);
    setUserType(null);
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
      }}
    >
      {children}
    </authContext.Provider>
  );
};
