#[no_mangle]
pub fn add(first: i32, second:i32) -> i32 {
 first + second
}

#[no_mangle]
pub fn subtract(first: i32, second:i32) -> i32 {
 first - second
}

#[no_mangle]
pub fn multiply(first: i32, second:i32) -> i32 {
 first * second
}
