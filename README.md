# API DB Migration script

Creation 

## Table of Contents

- [Environment Variables](#environment-variables)

## Environment Variables

This application uses the following environment variables:

|     Environment Variable      |  Type   |       Default        |                      Notes                      |
| ----------------------------- | ------- | -------------------- | ----------------------------------------------- |
| `HOST`                 | String  |                      | Used to access mongo         |
| `DB_NAME`                 | String  |                      | Used to access the mongo database name        |


## Instructions 
-- DB migration is always two phase up for collection creation and down for collection

--Please start with providing the right .env file, for example
  if the .env.stg is the file , then rename it to .env
--Provide the command
  npm run preload for preloading the env 
  npm run migrate-down (Always first un migrate)
  npm run migrate-up 

migrate-down:- Removes the collection and makes it empty
migrate-up: Populates the collection


# Deployment
-- npm install 
-- populate .env as per the stage
-- run npm run migrate-down
-- run npm run migrate-up
