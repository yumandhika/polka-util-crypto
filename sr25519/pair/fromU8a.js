import { u8aToU8a } from '@polkadot/util';
const SEC_LEN = 64;
const PUB_LEN = 32;
const TOT_LEN = SEC_LEN + PUB_LEN;
export function sr25519PairFromU8a(full) {
    const fullU8a = u8aToU8a(full);
    if (fullU8a.length !== TOT_LEN) {
        throw new Error(`Expected keypair with ${TOT_LEN} bytes, found ${fullU8a.length}`);
    }
    return {
        publicKey: fullU8a.slice(SEC_LEN, TOT_LEN),
        secretKey: fullU8a.slice(0, SEC_LEN)
    };
}
