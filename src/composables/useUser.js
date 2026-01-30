import { db } from '@/firebase/config'
import { doc, setDoc, getDoc, updateDoc } from 'firebase/firestore'
import { auth } from '@/firebase/config'

export function useUser() {
  const createUser = async (data) => {
    const uid = auth.currentUser.uid

    await setDoc(doc(db, 'users', uid), {
      ...data,
      progress: {
        foundClient: false,
        sentContact: false,
        weWorking: false,
        gotPaid: false
      }
    })
  }

  const getUser = async () => {
    const uid = auth.currentUser.uid
    const snap = await getDoc(doc(db, 'users', uid))
    return snap.data()
  }

  const updateProgress = async (progress) => {
    const uid = auth.currentUser.uid
    await updateDoc(doc(db, 'users', uid), { progress })
  }

  return { createUser, getUser, updateProgress }
}
