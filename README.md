# PodMobile

## Important! Guides:

For using the app you need to follow steps below, also fill `.env`, run command and fill with your own values:
`cp .env.example .env`

---

Guides:

1. Please use `yarn` for modules management
1. We are not storing autogenerated queries, subscriptions and mutation. After adding any query please run `amplify codegen`. After that you will have all generated types regarding your queries

## How to get Cognito to work

1. Go to AWS Console User Pools and find the pool you want to use.
2. Go to General Settings and copy Pool Id
3. Go to App client and copy App client id. If there is no App client id then generate new one, BUT `Generate client secret` should be unchecked
4. Copy Pool Id to `USER_POOL_ID` in `.env`
5. Copy App client id to `USER_POOL_CLIENT_ID` in `.env`

Configure the amplify project with the below commands:

```bash
cd pod-mobile-app/
amplify env add
```

See the below for the answers, though these could change over time. Obviously choose your preferred editor and the profile you setup your AWS credentials in. [Click here for info on AWS credentials setup](https://docs.aws.amazon.com/cli/latest/userguide/cli-multiple-profiles.html)

```bash
? Do you want to use an existing environment? Yes
? Choose the environment you would like to use: dev
? Choose your default editor: Atom Editor
Using default provider  awscloudformation

For more information on AWS Profiles, see:
https://docs.aws.amazon.com/cli/latest/userguide/cli-multiple-profiles.html

? Do you want to use an AWS profile? Yes
? Please choose the profile you want to use amplify
```

You may get error like this, with tons of output, you can ignore it.

```bash
✖ There was an error initializing your environment.
init failed
```

Then lets add the backend api as if it was 3rd party. Check the API ID if it has changed, you can always find it in the [console](https://console.aws.amazon.com/appsync/home?region=us-east-1#/apis). Execute the below command:

```bash
amplify add codegen --apiId btbdyyq2zngp7a4onztgz3za2e
```

Your output should look like this and you can ignore the error

```bash
✔ Getting API details
✖ Getting API details
Unexpected token u in JSON at position 0
```

Finally lets configure codegen, execute the below command

```bash
amplify configure codegen
```

See below for the answers, largely you can just accept the default by hitting enter on each. I prefer to change the default on the statement depth to 3, but this all can be always reconfigured later as well.

```bash
? Choose the code generation language target typescript
? Enter the file name pattern of graphql queries, mutations and subscriptions src/graphql/**/*.ts
? Do you want to generate/update all possible GraphQL operations - queries, mutations and subscriptions Yes
? Enter maximum statement depth [increase from default if your schema is deeply nested] 3
? Enter the file name for the generated code src/API.ts
? Do you want to generate code for your newly created GraphQL API Yes
✔ Downloaded the schema
✔ Generated GraphQL operations successfully and saved at src/graphql
✔ Code generated successfully and saved in file src/API.ts
```

After this you should have some generated code in the `src` directory which you can use. You should also now be able to execute just:

```bash
amplify codegen
```

This will simply refresh the generated code. You probably want to do this anytime there has been API deployment.