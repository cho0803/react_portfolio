import { useState, useEffect } from 'hooks'

export const useLoad  = () : { isLoading : boolean } => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timeout = setTimeout(() => setIsLoading(false), 2000)
    return () => clearTimeout(timeout)
  },[]);
  return { isLoading }
}
