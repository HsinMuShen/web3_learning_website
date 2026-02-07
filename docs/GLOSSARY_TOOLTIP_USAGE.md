# Glossary Tooltip Feature

## Overview
Articles can now include interactive glossary terms that show definitions on hover and link to full glossary pages on click!

## How to Use in Articles

### Basic Usage
Simply wrap any glossary term with the `<GlossaryTerm>` component in your MDX files:

```mdx
Bitcoin is a decentralized <GlossaryTerm>cryptocurrency</GlossaryTerm> that runs on <GlossaryTerm>blockchain</GlossaryTerm> technology.
```

### Features
- **Hover**: Shows a popup tooltip with the term's definition
- **Click**: Navigates to the full glossary page for that term
- **Styling**: Automatically styled with dotted underline and primary color

## Supported Terms (17+)

The following terms have predefined definitions and will show tooltips:

1. **blockchain** - Distributed digital ledger
2. **bitcoin** - First cryptocurrency
3. **ethereum** - Smart contract platform
4. **smart contract** - Self-executing code on blockchain
5. **wallet** - Tool to store crypto
6. **defi** - Decentralized Finance
7. **nft** - Non-Fungible Token
8. **gas** - Ethereum transaction fees
9. **dao** - Decentralized Autonomous Organization
10. **web3** - Next generation internet
11. **cryptocurrency** - Digital currency
12. **private key** - Secret cryptographic code
13. **mining** - Validating blockchain transactions
14. **staking** - Locking crypto for rewards
15. **consensus** - Network agreement mechanism
16. **dapp** - Decentralized Application
17. **token** - Digital asset on blockchain

## Examples

### Example 1: Simple term
```mdx
A <GlossaryTerm>wallet</GlossaryTerm> stores your crypto.
```

### Example 2: Multiple terms
```mdx
<GlossaryTerm>DeFi</GlossaryTerm> applications use <GlossaryTerm>smart contracts</GlossaryTerm> 
on <GlossaryTerm>Ethereum</GlossaryTerm>.
```

### Example 3: Custom display text (e.g. localized)
Use the `term` prop when the displayed text differs from the lookup key (e.g. in Spanish or Traditional Chinese articles):

```mdx
<GlossaryTerm term="blockchain">cadena de bloques</GlossaryTerm>
<GlossaryTerm term="smart contract">智能合約</GlossaryTerm>
```

## Multi-Language Support

Glossary tooltips are **localized** for all supported languages (English, Spanish, Traditional Chinese):

- **Definitions** are shown in the article’s locale (from `GlossaryTerm`’s `glossaryDefinitions` for `en`, `es`, `zh-TW`).
- **“Click to learn more”** is translated via `messages/*.json` under `blog.clickToLearnMore`.
- The blog page passes `locale` and `learnMoreText` into `GlossaryTerm`, so no extra setup is needed in MDX.

In localized articles (e.g. `index.es.mdx`, `index.zh-TW.mdx`), use the `term` prop with the **English key** and the **localized word** as children so the correct definition and link are used:

```mdx
<GlossaryTerm term="wallet">billetera</GlossaryTerm>
<GlossaryTerm term="ethereum">以太坊</GlossaryTerm>
```

## Adding New Terms

To add new glossary terms with tooltips:

1. Open `/components/glossary/GlossaryTerm.tsx`
2. Add the term to the `glossaryDefinitions` object with definitions for each locale (`en`, `es`, `zh-TW`):

```typescript
'your-term': {
  en: { slug: 'your-term', definition: 'Short definition in English.' },
  es: { slug: 'your-term', definition: 'Definición corta en español.' },
  'zh-TW': { slug: 'your-term', definition: '簡短繁體中文定義。' },
}
```

3. Make sure the term exists in `/content/glossary/terms/your-term.mdx` (and optional `your-term.es.mdx`, `your-term.zh-TW.mdx`).

## Benefits

✅ **Better Learning**: Readers can quickly understand terms without leaving the article
✅ **SEO**: Internal links to glossary improve site structure
✅ **User Experience**: Hover tooltips reduce friction
✅ **Accessibility**: Click still works for mobile users

## Mobile Behavior

On mobile devices:
- Hover is not available
- First tap shows the tooltip
- Second tap or click navigates to glossary page
- Tooltip auto-closes when tapping elsewhere
