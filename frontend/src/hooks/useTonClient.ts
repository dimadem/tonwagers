import { getHttpEndpoint } from "@orbs-network/ton-access";
import { TonClient } from "ton";
import { useAsyncInitialize } from "./useAsyncInitialize";

export function useTonClient() {
  return useAsyncInitialize(
    async () =>
      new TonClient({
        endpoint: await getHttpEndpoint({ network: "testnet" }),
      })
  );
}

// address of the contract
// kQCSiCOv9TLcciwqqVQbWL121juPFcqmkVhSif-NSpd3WGEt