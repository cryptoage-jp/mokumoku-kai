//ref: https://makerdao.com/documentation/#dai-js

//install the package with npm, as a first step
//npm install @makerdao/dai
import Maker from '@makerdao/dai';

const maker = Maker.create("kovan", { privateKey: YOUR_PRIVATE_KEY });

//Using Maker and Cdp API
//awaitを使うときはasyncが必要。awaitを用いることで上から実行できる。
async function openLockDraw() {
  await maker.authenticate();
  const cdp = await maker.openCdp();

  await cdp.lockEth(0.25);
  await cdp.drawDai(50);

  const debt = await cdp.getDebtValue();
  console.log(debt.toString); // '50.00 DAI'
}

openLockDraw();