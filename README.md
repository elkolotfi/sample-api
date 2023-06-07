## Description

A small simple api written with Nestjs framework. It simply takes a number and convert it to letters (in the chosen language)

## Installation

```bash
$ yarn install
```

## Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Test

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```

## Endpoints

### GET /api/convert/:lang/:num

Convert a number into letters in the given language code

**Parameters**

|   Name | Required |  Type   | Description                                                            |
|-------:|:--------:|:-------:|------------------------------------------------------------------------|
| `lang` | required | string  | A valid iso-639-1 language code. <br/><br/> Example: `ar`, `en` or `fr`. |
|  `num` | required | string  | Valid integer                                                          |

**Response**

```
{
  "letters": "three hundred and forty-two",
  "num": "342",
  "lang": "en"
}
```

## Stay in touch

- Author - [EL KORCHI Lotfi](https://elkolotfi.github.io)
