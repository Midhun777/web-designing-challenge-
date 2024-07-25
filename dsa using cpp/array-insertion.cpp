#include <iostream>

using namespace std;

// chatGPT

void insertElement(int arr[], int &size, int element, int position)
{
    // Check if the position is valid
    if (position < 0 || position > size)
    {
        cout << "Invalid position!" << endl;
        return;
    }

    // Shift elements to the right to make space for the new element
    for (int i = size; i > position; i--)
    {
        arr[i] = arr[i - 1];
    }

    // Insert the new element at the specified position
    arr[position] = element;

    // Increase the size of the array by 1
    size++;
}

int main()
{
    int arr[100]; // Declare an array with a maximum capacity of 100 elements
    int size;     // Variable to store the current size of the array

    // Get the number of elements from the user
    cout << "Enter the number of elements in the array: ";
    cin >> size;

    // Get the elements of the array from the user
    cout << "Enter the elements of the array: ";
    for (int i = 0; i < size; i++)
    {
        cin >> arr[i];
    }

    int element, position;
    // Get the new element to be inserted from the user
    cout << "Enter the element to be inserted: ";
    cin >> element;

    // Get the position at which to insert the new element from the user
    cout << "Enter the position at which to insert the element: ";
    cin >> position;

    // Display the original array
    cout << "Original array: ";
    for (int i = 0; i < size; i++)
    {
        cout << arr[i] << " ";
    }
    cout << endl;

    // Insert the new element into the array
    insertElement(arr, size, element, position);

    // Display the array after insertion
    cout << "Array after insertion: ";
    for (int i = 0; i < size; i++)
    {
        cout << arr[i] << " ";
    }
    cout << endl;
    return 0;
}
