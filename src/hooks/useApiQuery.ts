import { useQuery } from '@apollo/client'
import { Loader } from 'src/components'

interface IApiQuery {
  query: any
  variables: any
}

export default function useApiQuery({ query, variables = {} }: IApiQuery) {
  const { loading, error, data } = useQuery(query, variables)

  return {
    data,
    loading,
    error,
    LoadingHandler: Loader,
  }
}
