fn factorial(n: Int) -> Int {
    if n == 0 or n == 1 {
        return 1
    } else {
        return n * factorial(n - 1)
    }
}

fn main() {
    let num: Int = 5
    print(f"Factorial of {num} is {factorial(num)}")
}
