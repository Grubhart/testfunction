const { StorageManagementClient } = require("@azure/arm-storage");
const { ClientSecretCredential } = require("@azure/identity");



module.exports = async function (context, req) {
    
    context.log('JavaScript HTTP trigger function processed a request.');
    //const { StorageManagementClient } = require("@azure/arm-storage");
    //const { DefaultAzureCredential } = require("@azure/identity");
    
    const subscriptionId = '0fa7027f-094a-47bc-b01c-9c6837b376cb';//"{subscription-id}";
    const resourceGroupName = "res4228";
    const accountName = "sto2434";

    const credential = new ClientSecretCredential(
        '23151e61-b580-474e-baee-5ffaae3c8b81',//process.env.AZURE_TENANT_ID, // The tenant ID in Azure Active Directory
        'a517ee91-f2d9-495f-9b59-72f056156e77',//process.env.AZURE_CLIENT_ID, // The app registration client Id in the AAD tenant
        'ueJ8Q~560uX~IXI9k612pvDxS.ODzdRAF7qnka0-'//process.env.AZURE_CLIENT_SECRET // The app registration secret for the registered application
      );



    //const credential = new DefaultAzureCredential();
    const client = new StorageManagementClient(credential, subscriptionId);
    //const myResult = await client.storageAccounts.beginFailoverAndWait
    console.log('llamando funcion');
    const result = client.storageAccounts.beginFailoverAndWait(resourceGroupName, accountName);
    //const result = await client.storageAccounts.beginFailoverAndWait(resourceGroupName, accountName);
    console.log('llamando funcion');
    
    console.log(result);
}
