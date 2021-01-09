export type Stock = {
    "holding": [
        {
            "id": number,
            "holdingType": string,
            "providerAccountId": number,
            "sedol": string,
            "isin": string,
            "securityType": string,
            "securityStyle": string,
            "matchStatus": string,
            "enrichedDescription": string,
            "accountId": number,
            "createdDate": string,
            "lastUpdated": string,
            "costBasis": {
                "amount": number,
                "currency": string
            },
            "cusipNumber": string,
            "description": string,
            "optionType": string,
            "price": {
                "amount": number,
                "currency": string
            },
            "quantity": number,
            "symbol": string,
            "value": {
                "amount": number,
                "currency": string
            }
        }
    ]
};