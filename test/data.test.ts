import { ChainId, Fetcher } from '../src'

// TODO: replace the provider in these tests
describe.skip('data', () => {
  it('Token', async () => {
    const token = await Fetcher.fetchTokenData(ChainId.MAINNET, '0x267Ae4bA9CE5ef3c87629812596b0D89EcBD81dD') // EVO
    expect(token.decimals).toEqual(18)
  })

  it('Token:CACHE', async () => {
    const token = await Fetcher.fetchTokenData(ChainId.MAINNET, '0x5d4685c2C75581C67b9D6292A065a767bC214681') // OMNIA
    expect(token.decimals).toEqual(8)
  })

  // it('Pair', async () => {
  //   const token = new Token(ChainId.TESTNET, '0x6D3fb518B8833F9949EA5C6591c979EF5254aEeC', 18) // EVO
  //   const pair = await Fetcher.fetchPairData(WETH[ChainId.TESTNET], token)
  //   expect(pair.liquidityToken.address).toEqual('0x8B22F85d0c844Cf793690F6D9DFE9F11Ddb35449')
  // })
})
