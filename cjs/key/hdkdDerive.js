"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSeedDeriveFn = void 0;
function createSeedDeriveFn(fromSeed, derive) {
    return (keypair, { chainCode, isHard }) => {
        if (!isHard) {
            throw new Error('A soft key was found in the path and is not supported');
        }
        return fromSeed(derive(keypair.secretKey.subarray(0, 32), chainCode));
    };
}
exports.createSeedDeriveFn = createSeedDeriveFn;
