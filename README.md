# FreedFi
"Empowering freelancers through talent-backed loans with FreedFi."

## Project Description
FreedFi is pioneering Freedom for Freelancers by revolutionizing the lending landscape. Our community lending infrastructure offers Talent-backed loans to skilled contractors. Leveraging decentralized finance strategies and Trust Credentials, we bring transparency, accountability, and real-time credit scoring to the lending cycle. 

Join us as we shape the future of lending with a trustless, on-chain solution for DAOs, communities, member organizations and more. 

## Unique Value Proposition
FreedFi revolutionizes lending for freelancers by offering secure private identity verification, trust credentials, and seamless DeFi integration. Our platform provides enhanced privacy and security while enabling efficient fund management, skill verification, and transparent loan transfers, empowering freelancers and investors alike.

Advantages:

Enhanced Privacy and Security: By utilizing anon aadhar for secure private identity verification, FreedFi ensures the confidentiality and protection of user information, providing freelancers and investors with peace of mind.

Trust Credentials and Skill Verification: The implementation of soul bound credentials ERC1155 (Skill & Trust) and ZK proofs for attesting to work history and training completion, FreedFi enables a robust vetting process that verifies freelancers' skills, enhancing trust and credibility within the platform.

Seamless DeFi Integration: FreedFi offers zero interest and no collateral loans by leveraging various DeFi solutions. The Defi Investmentment pool uses gains to reward investors for funding the future. We use 1inch API for DeFi swaps and have the infrastructure to enable mutliple stratedies like compound lending and more. This integration allows for secure and transparent fund management.

Trustless & Transparent: Smart contracts are used for loan requests, transfers and trust credential issuance. FreedFi ensures a seamless and efficient experience for both freelancers and investors. 

## Problems We're Solving

Freelancers face overwhelming difficulties in obtaining loans due to the absence of a steady work history, which hinders their access to traditional lending options. This hinders dreams of sustainable living, home ownership, car leasing and more. 

Data on the challenge:
- According to a survey conducted by Upwork, 58% of freelancers reported facing challenges in securing financing due to the lack of a stable income source.
- The Federal Reserve's 2020 Small Business Credit Survey revealed that 70% of non-employer firms, which often include freelancers, experienced funding shortfalls, highlighting the struggle they face in accessing capital.
- A study by the Freelancers Union found that 63% of freelancers reported having difficulty obtaining a mortgage due to their irregular income, underscoring the limitations they encounter in traditional loan applications.

There is no decentralized lending platform that allows for private, uncollateralized loans. We aim to offer our solution to tight-knit communities that want to leverage DeFi bring credit capital and investment returns to members.
  
## Smart Contracts

Trustless & Transparent: Smart contracts are used for loan requests, transfers and trust credential issuance. FreedFi ensures a seamless and efficient experience for both freelancers and investors. 

GetaLoan.sol https://github.com/captainahab0x/freedfi/blob/main/contracts/src/GetALoan.sol
- Borrowers request, are approved, and payback loans.
- Investors approve loans and receive payback. 
- FreedFi fund the loan and issues Trust Credentials.

PoolControler.sol
- FreedFi manages investor funds trasparently https://github.com/captainahab0x/freedfi/blob/main/contracts/src/PoolController.sol

TrustCredential.sol
- TrustCredentials are issued after loan is repaid. Python script determins the reliability score by calculating date of return compared to date due.
  
Contracts are deployed on the following blockchains:
Celo - GetALoan.sol - 0x1E758656f3Ba1aC562b6D93D08E2ffE0DbE347B0 PoolController - 0x8F78e0fa1a25eb313408C4C70EFa5C8AAB04556E

Scroll - GetALoan.sol - 0x1E758656f3Ba1aC562b6D93D08E2ffE0DbE347B0 PoolController - 0x8F78e0fa1a25eb313408C4C70EFa5C8AAB04556E

Mantle - GetALoan.sol - 0x1E758656f3Ba1aC562b6D93D08E2ffE0DbE347B0 PoolController - 0x8F78e0fa1a25eb313408C4C70EFa5C8AAB04556E

## Project structure
  - Anoon Aadhar for Identitfy Verification and Maliciious Actor Blacklist Security
  - Zero Knowledge Proofs for additional skill attestation (Reclaim Protocol)
  - Smart Contracts for trustless loan distribution and tracking. 
  - Erc1155 and Python Script for Trust Credentials
  - 1inch API for Defi Pool Strategies


## Public and Private payment methods

As this is meant for communities this is all public but we hope to create a private version in the future.

