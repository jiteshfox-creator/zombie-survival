#include <stdio.h>

int main() {

    int playerHealth = 100;

    printf("Player Health: %d\n", playerHealth);

    playerHealth -= 25;

    printf("After Damage: %d\n", playerHealth);

    return 0;
}