import GlossaryTooltip from './GlossaryTooltip'
import GlossaryLink from './GlossaryLink'

export type GlossaryLocale = 'en' | 'es' | 'zh-TW'

type TermDef = { slug: string; definition: string }
type LocaleDefs = Record<GlossaryLocale, TermDef>

// Predefined glossary terms with definitions in en, es, zh-TW
const glossaryDefinitions: Record<string, LocaleDefs> = {
  blockchain: {
    en: { slug: 'blockchain', definition: 'A distributed digital ledger that records transactions across many computers in a way that makes it nearly impossible to change or hack.' },
    es: { slug: 'blockchain', definition: 'Un libro de contabilidad digital distribuido que registra transacciones en muchos ordenadores de manera que hace casi imposible cambiar o hackear los datos.' },
    'zh-TW': { slug: 'blockchain', definition: '區塊鏈是一種分散式數位帳本，在許多電腦上記錄交易，使得數據幾乎不可能被更改或駭客攻擊。' },
  },
  bitcoin: {
    en: { slug: 'bitcoin', definition: 'The first and most well-known cryptocurrency, created in 2009. A decentralized digital currency that can be sent directly from person to person without a bank.' },
    es: { slug: 'bitcoin', definition: 'La primera y más conocida criptomoneda, creada en 2009. Una moneda digital descentralizada que puede enviarse directamente de persona a persona sin un banco.' },
    'zh-TW': { slug: 'bitcoin', definition: '2009年問世的第一個、也是最知名的加密貨幣。一種去中心化的數位貨幣，可不經銀行直接從一個人傳給另一個人。' },
  },
  ethereum: {
    en: { slug: 'ethereum', definition: 'A blockchain platform that enables developers to create decentralized applications (dApps) and smart contracts.' },
    es: { slug: 'ethereum', definition: 'Una plataforma blockchain que permite a los desarrolladores crear aplicaciones descentralizadas (dApps) y contratos inteligentes.' },
    'zh-TW': { slug: 'ethereum', definition: '一個讓開發者能建立去中心化應用（dApp）與智能合約的區塊鏈平台。' },
  },
  'smart contract': {
    en: { slug: 'smart-contract', definition: 'A self-executing program stored on a blockchain that automatically enforces the terms of an agreement when predefined conditions are met.' },
    es: { slug: 'smart-contract', definition: 'Un programa autoejecutante almacenado en una blockchain que automáticamente hace cumplir los términos de un acuerdo cuando se cumplen condiciones predefinidas.' },
    'zh-TW': { slug: 'smart-contract', definition: '儲存在區塊鏈上的自動執行程式，當預設條件滿足時會自動執行協議條款。' },
  },
  wallet: {
    en: { slug: 'wallet', definition: 'A digital tool that allows you to store, send, and receive cryptocurrencies. It stores your private keys that give you access to your crypto.' },
    es: { slug: 'wallet', definition: 'Una herramienta digital que te permite almacenar, enviar y recibir criptomonedas. Almacena tus claves privadas que te dan acceso a tu cripto.' },
    'zh-TW': { slug: 'wallet', definition: '一種可儲存、發送與接收加密貨幣的數位工具，並保管你的私鑰以存取加密資產。' },
  },
  defi: {
    en: { slug: 'defi', definition: 'Decentralized Finance - financial services built on blockchain that operate without traditional intermediaries like banks or brokers.' },
    es: { slug: 'defi', definition: 'Finanzas Descentralizadas: servicios financieros construidos sobre blockchain que operan sin intermediarios tradicionales como bancos o corredores.' },
    'zh-TW': { slug: 'defi', definition: '去中心化金融：建立在區塊鏈上的金融服務，無需銀行或經紀人等傳統中介。' },
  },
  nft: {
    en: { slug: 'nft', definition: 'Non-Fungible Token - a unique digital asset that cannot be replaced or exchanged for another identical one.' },
    es: { slug: 'nft', definition: 'Token No Fungible: un activo digital único que no puede reemplazarse ni intercambiarse por otro idéntico.' },
    'zh-TW': { slug: 'nft', definition: '非同質化代幣：獨一無二的數位資產，無法被替換或與另一個相同的交換。' },
  },
  gas: {
    en: { slug: 'gas', definition: 'Fees paid to execute transactions and smart contracts on the Ethereum network.' },
    es: { slug: 'gas', definition: 'Comisiones pagadas para ejecutar transacciones y contratos inteligentes en la red Ethereum.' },
    'zh-TW': { slug: 'gas', definition: '在以太坊網路上執行交易與智能合約時所支付的手續費。' },
  },
  dao: {
    en: { slug: 'dao', definition: 'Decentralized Autonomous Organization - an organization governed by code on a blockchain where decisions are made through member voting.' },
    es: { slug: 'dao', definition: 'Organización Autónoma Descentralizada: una organización gobernada por código en una blockchain donde las decisiones se toman mediante votación de miembros.' },
    'zh-TW': { slug: 'dao', definition: '去中心化自治組織：由區塊鏈上的程式碼治理，透過成員投票做決策的組織。' },
  },
  web3: {
    en: { slug: 'web3', definition: 'The next generation of the internet built on blockchain, focused on decentralization, user ownership, and removing intermediaries.' },
    es: { slug: 'web3', definition: 'La próxima generación de internet construida sobre blockchain, centrada en descentralización, propiedad del usuario y eliminación de intermediarios.' },
    'zh-TW': { slug: 'web3', definition: '建立在區塊鏈上的下一代網路，強調去中心化、用戶擁有與去除中介。' },
  },
  cryptocurrency: {
    en: { slug: 'cryptocurrency', definition: 'Digital or virtual currency that uses cryptography for security and operates independently of a central bank.' },
    es: { slug: 'cryptocurrency', definition: 'Moneda digital o virtual que usa criptografía para seguridad y opera de forma independiente de un banco central.' },
    'zh-TW': { slug: 'cryptocurrency', definition: '使用密碼學保障安全、並獨立於中央銀行運作的數位或虛擬貨幣。' },
  },
  'private key': {
    en: { slug: 'private-key', definition: 'A secret cryptographic code that proves ownership of your cryptocurrency and allows you to access and spend it.' },
    es: { slug: 'private-key', definition: 'Un código criptográfico secreto que prueba la propiedad de tu criptomoneda y te permite acceder y gastarla.' },
    'zh-TW': { slug: 'private-key', definition: '證明你擁有加密貨幣並可存取與動用的秘密密碼代碼。' },
  },
  mining: {
    en: { slug: 'mining', definition: 'The process of validating transactions and adding new blocks to a blockchain by solving complex mathematical problems.' },
    es: { slug: 'mining', definition: 'El proceso de validar transacciones y añadir nuevos bloques a una blockchain resolviendo problemas matemáticos complejos.' },
    'zh-TW': { slug: 'mining', definition: '透過解決複雜數學問題來驗證交易並將新區塊加入區塊鏈的過程。' },
  },
  staking: {
    en: { slug: 'staking', definition: 'Locking up cryptocurrency to support blockchain network operations and earn rewards in return.' },
    es: { slug: 'staking', definition: 'Bloquear criptomonedas para apoyar las operaciones de la red blockchain y ganar recompensas a cambio.' },
    'zh-TW': { slug: 'staking', definition: '鎖倉加密貨幣以支持區塊鏈網路運作，並從中獲得獎勵。' },
  },
  consensus: {
    en: { slug: 'consensus', definition: 'The mechanism by which nodes in a blockchain network agree on the current state of the ledger.' },
    es: { slug: 'consensus', definition: 'El mecanismo por el cual los nodos en una red blockchain acuerdan el estado actual del libro de contabilidad.' },
    'zh-TW': { slug: 'consensus', definition: '區塊鏈網路中的節點就帳本當前狀態達成一致的機制。' },
  },
  dapp: {
    en: { slug: 'dapp', definition: 'Decentralized Application - an application that runs on a blockchain network rather than centralized servers.' },
    es: { slug: 'dapp', definition: 'Aplicación Descentralizada: una aplicación que se ejecuta en una red blockchain en lugar de servidores centralizados.' },
    'zh-TW': { slug: 'dapp', definition: '去中心化應用：在區塊鏈網路上運行、而非在中心化伺服器上運作的應用程式。' },
  },
  token: {
    en: { slug: 'token', definition: 'A digital asset built on an existing blockchain that can represent currency, utility, or ownership.' },
    es: { slug: 'token', definition: 'Un activo digital construido sobre una blockchain existente que puede representar moneda, utilidad o propiedad.' },
    'zh-TW': { slug: 'token', definition: '建立在既有區塊鏈上的數位資產，可代表貨幣、效用或所有權。' },
  },
  node: {
    en: { slug: 'node', definition: 'A computer connected to a blockchain network that maintains a copy of the ledger and helps validate transactions.' },
    es: { slug: 'node', definition: 'Una computadora conectada a una red blockchain que mantiene una copia del libro de contabilidad y ayuda a validar transacciones.' },
    'zh-TW': { slug: 'node', definition: '連接到區塊鏈網路的電腦，保存帳本副本並協助驗證交易。' },
  },
  decentralization: {
    en: { slug: 'decentralization', definition: 'A system where control and decision-making are distributed across a network rather than controlled by a single central authority.' },
    es: { slug: 'decentralization', definition: 'Un sistema donde el control y la toma de decisiones se distribuyen en una red en lugar de ser controlados por una única autoridad central.' },
    'zh-TW': { slug: 'decentralization', definition: '控制與決策分散於整個網路、而非由單一中央權威掌控的系統。' },
  },
}

function getLocale(locale: string | undefined): GlossaryLocale {
  if (locale === 'es' || locale === 'zh-TW') return locale
  return 'en'
}

interface GlossaryTermProps {
  children: string
  term?: string
  locale?: string
  learnMoreText?: string
}

export default function GlossaryTerm({ children, term, locale, learnMoreText }: GlossaryTermProps) {
  const termKey = (term || children).toLowerCase().trim()
  const loc = getLocale(locale)
  const localeDefs = glossaryDefinitions[termKey]
  const glossaryData = localeDefs?.[loc] ?? localeDefs?.en

  if (!glossaryData) {
    return (
      <GlossaryLink
        href={`/glossary/${termKey.replace(/\s+/g, '-')}`}
        className="text-primary-600 underline decoration-dotted hover:text-primary-700 cursor-pointer"
      >
        {children}
      </GlossaryLink>
    )
  }

  return (
    <GlossaryTooltip
      term={term || children}
      slug={glossaryData.slug}
      definition={glossaryData.definition}
      learnMoreText={learnMoreText}
    >
      {children}
    </GlossaryTooltip>
  )
}
