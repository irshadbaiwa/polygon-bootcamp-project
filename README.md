# National Election

This project implements a decentralized election process. It is deployed to Polygon Testnet and verified on polygonscan.


## Tech Stack
    - Solidity
    - Hardhat
    - Ethers
    - Typescript


## Use of Product
This could be used for conducting elections  that are free, fair, open, and decentralized (so many adjectives 😅)


## Description

### Motivation
The election process in alot of countries(especially underdeveloped countries) is tidious and the results can be tampered with easily; either intentionally for selfish interests or by environmental causes.
This project aims to solve that by providing an open and decentralized process that is error-free and tamper-resistant.

### How to use
The contract specifies and admin-address that has the sole capability of setting the election date, add/remove candidates and officials. This is set when deploying an instance of the contract.

The process is easy and fast, a voter casts a vote by connecting their wallet and providing their national identity number(for verification and to prevent multiple voting).

For voters that do not have a wallet address, they can vote through one of the Election Official's portal also providing their national identity number.

Multiple votes are rejected immediately and votes casted are immutable and can't be changed by anyone(admin included).Votes are recorded on the blockchain and can be accessed and viewed by everyone. When election end timestamp is reached, no additional votes can be casted and the winner is evaluated.


The contract is deployed on Polygon Testnet and can be interacted with [on polygonscan](https://mumbai.polygonscan.com/address/0xcDBC50287Ab0A69759CDb9abFe18d53913196C7F).

I have started creating the frontend but it is not ready yet, the team is a one-man-team. I couldn't get a team to join so I decided to go solo than to do nothing.


## Conclusion
🎉🎉 Polygon Africa Bootcamp was a wonderful ride. Thank you for preparing me to exert my presence on the web3 space!