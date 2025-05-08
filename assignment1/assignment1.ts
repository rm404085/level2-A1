// p1
function formatString(input: string, toUpper: boolean = true): string {
    return toUpper ? input.toUpperCase() : input.toLowerCase();
  }

//   p2
function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[] {
    const result: { title: string; rating: number }[] = [];
    for (const item of items) {
      if (item.rating >= 4) {
        result.push(item);
      }
    }
    return result;
  }
  
  const books = [
    { title: "Book A", rating: 4.5 },
    { title: "Book B", rating: 3.2 },
    { title: "Book C", rating: 5.0 }
  ];


//   p3
function concatenateArrays<T>(...arrays: T[][]): T[] {
    const result: T[] = [];
    for (const array of arrays) {
      result.push(...array);
    }
    return result;
  }

//   p4
class Vehicle {
    private make: string;
    private year: number;
  
    constructor(make: string, year: number) {
      this.make = make;
      this.year = year;
    }
  
    getInfo(): string {
      return `Make: ${this.make}, Year: ${this.year}`;
    }
  }
  
  class Car extends Vehicle {
    private model: string;
  
    constructor(make: string, year: number, model: string) {
      super(make, year);
      this.model = model;
    }
  
    getModel(): string {
      return `Model: ${this.model}`;
    }
  }
  const myCar = new Car("Toyota", 2020, "Corolla");
  
//   p5
function processValue(value: string | number): number {
    if (typeof value === "string") {
      return value.length;
    } else {
      return value * 2;
    }
  }
// p6
interface Product {
    name: string;
    price: number;
  }
  
  function getMostExpensiveProduct(products: Product[]): Product | null {
    if (products.length === 0) return null;
  
    let maxProduct = products[0];
  
    for (const product of products) {
      if (product.price > maxProduct.price) {
        maxProduct = product;
      }
    }
  
    return maxProduct;
  }
// p7
enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
  }
  
  function getDayType(day: Day): string {
    if (day === Day.Saturday || day === Day.Sunday) {
      return "Weekend";
    } else {
      return "Weekday";
    }
  }
// p8
async function squareAsync(n: number): Promise<number> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (n < 0) {
          reject(new Error("Negative number not allowed"));
        } else {
          resolve(n * n);
        }
      }, 1000);
    });
  }
  