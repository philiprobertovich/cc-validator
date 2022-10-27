:
Describe: validateCc()

Test: "It should double every other card digit starting from the right to left."
Code: validateCc(4102080880435620);
Expected Output: 0 12 6 0 16 16 4 2

Test: "It should leave the rest of the numbers unchanged"
Code: validateCc(4102080880435620);
Expected Output: 2 5 4 8 0 0 0 4

Test: "if the digit is doubled and it's more than 10 it should add the numbers"
Code: validateCc(4102080880435620);
Expected Output: 0 3 6 0 7 7 4 2


Describe: validateFirstDig()

Test: "It should recognize that the card is not American Express.
Code: validateFirstDig(4102080880435620)
Expected Output: "Your card is not American Express."

Test: "It should recognize if the card is invalid.
Code: validateFirstDig(3102080880435620)
Expected Output: "Your card is invalid."

Test: "It should validate that the card is American Express.
Code: validateFirstDig(3402080880435620)
Expected Output: "Your card is American Express."

Test: "It should validate that the card is American Express.
Code: validateFirstDig(3702080880435620)
Expected Output: "Your card is American Express."

Test: "It should validate if the card is Visa.
Code: validateFirstDig(4102080880435620)
Expected Output: "Your card is Visa."

Test: "It should validate if the card is Mastercard.
Code: validateFirstDig(5102080880435620)
Expected Output: "Your card is Mastercard."

Test: "It should validate if the card is a Discover card.
Code: validateFirstDig(6102080880435620)
Expected Output: "Your card is a Discover card."