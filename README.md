# Calbian Transportation Authority Change Calculator

This application is designed to help riders on the Calbian transportation system determine if they have the necessary denominations of Gaavo currency to pay for their fare. 

## Installation

1. Clone this repository to your local machine
2. Navigate to the project directory in your terminal

## Usage

To run the application, enter the following command in your terminal:

```shell
npm run exact-change
```
You will be asked to input your collection of Gaavo in a comma seperated list. For example, if you had a collection of 1G, 4G, and 6G, then you should enter 1,4,6 when prompted. It will also ask the fare, which should be input as just the number. If the fare was 7G, you should input 7. Then, the application will then either output the combination of denominations that can be used to pay the fare, or indicate that no combination is possible. 

To test the application, enter the following command in your terminal:

```shell
npm run test
```

## Assumptions

This application does not make any assumptions about what currency denominations exist or don’t exist; just let the riders input what they have.

## Algorithm

The algorithm used to determine the possible combinations of denominations is a recursive approach that generates all possible combinations of Gaavo denominations and checks if any combination can be used to pay the fare. 

## Stack

This application is a CLI tool built with JavaScript, the readline module, and jest for testing.

