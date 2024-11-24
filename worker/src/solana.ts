
import { Keypair, LAMPORTS_PER_SOL, SystemProgram, Transaction, PublicKey, sendAndConfirmTransaction, Connection } from "@solana/web3.js";
import base58 from "bs58";

const connection = new Connection("https://solana-mainnet.g.alchemy.com/v2/7tgl3QPrV7aOW8vkYpZk0UvRdNwJFOIL", "finalized");

export async function sendSol(to: string, amount: string) {
    const keypair = Keypair.fromSecretKey(base58.decode((process.env.SOL_PRIVATE_KEY ?? "")))
    console.log(keypair.publicKey);
    const transferTransaction = new Transaction().add(
        SystemProgram.transfer({
          fromPubkey: keypair.publicKey,
          toPubkey: new PublicKey(to),
          lamports: parseFloat(amount) * LAMPORTS_PER_SOL, // 0.1 => 10 ^ 8
        })
    );

    await sendAndConfirmTransaction(connection, transferTransaction, [keypair]);
    console.log("sol Sent!")

}