import { observe, send } from "@absinthe/socket"

/**
 * Creates a Fetcher (Relay FetchFunction) using the given AbsintheSocket
 * instance
 */
const createFetcher = (absintheSocket, onError) =>
  new Promise((resolve, reject) =>
    observe(absintheSocket, send(absintheSocket, { operation, variables }), {
      onError,
      onAbort: reject,
      onResult: resolve,
    })
  )

export default createFetcher
