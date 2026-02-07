# Glossary Translation Status

## Overview
The glossary now supports multi-language content! Terms can have Spanish (.es.mdx) and Traditional Chinese (.zh-TW.mdx) versions.

## Translation Progress: 9/25 (36%)

### ✅ Translated Terms (9)
1. **blockchain** - 區塊鏈 / Blockchain
2. **bitcoin** - 比特幣 / Bitcoin
3. **wallet** - 錢包 / Cartera
4. **smart-contract** - 智能合約 / Contrato Inteligente
5. **ethereum** - 以太坊 / Ethereum
6. **defi** - DeFi（去中心化金融） / DeFi
7. **nft** - NFT（非同質化代幣） / NFT
8. **dao** - DAO（去中心化自治組織） / DAO
9. **web3** - Web3 / Web3

### ⏳ Remaining Terms to Translate (16)
1. consensus
2. cryptocurrency
3. dapp
4. decentralization
5. dex
6. gas
7. layer2
8. liquidity-pool
9. mining
10. node
11. private-key
12. proof-of-stake
13. proof-of-work
14. seed-phrase
15. staking
16. token

## How It Works

When a user visits a glossary term, the system:
1. Checks for a locale-specific file (e.g., `blockchain.zh-TW.mdx` for Traditional Chinese)
2. Falls back to English version if translation doesn't exist
3. All UI elements (buttons, navigation, labels) are fully translated

## Testing

Visit these URLs to test translations:
- English: `http://localhost:3002/glossary/blockchain`
- Spanish: Change language selector, then visit `/glossary/blockchain`
- Traditional Chinese: Change language selector, then visit `/glossary/blockchain`

## To Complete Translation

To translate the remaining 15 terms:
1. Copy an existing `.es.mdx` or `.zh-TW.mdx` file as template
2. Translate the content while keeping the frontmatter structure
3. Save with appropriate filename (e.g., `consensus.es.mdx`)
4. The system will automatically use the translation when available
