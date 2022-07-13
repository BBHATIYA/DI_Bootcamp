// Exercise ## Objects
// ## Exercise 1
// # Part I
// 1) Create a TV function constructor with 3 parameters : brand, channel and volume
// Channel should be 1 by default. Volume should be 50 by default.
// 2) Create properties brandTV, channelTV and volumeTV equal to the 3 parameters value.
// 2) Add methods to increase and decrease volume. When the methods are called it will increase or decrease the volume by 1.
// 3) Create an object for the LG TV
// 4) Call the inscrease method, and check if the volume changed
// ## Part II
// 5) Create a subclass for Smart TV
// 6) It overrides the method increase, so it increase the volume by 10 and not by 1
// 6) Add a attribute of Netflix that should be equal to true by default

class TV {
  constructor(brand, channel = 1, volume = 50) {
    this.brandTV = brand;
    this.channelTV = channel;
    this.volumeTV = volume;
  }

  increaseVolume() {
    this.volumeTV++;
    console.log(`The new volume is ${this.volumeTV}`);
  }

  decreaseVolume() {
    this.volumeTV--;
    console.log(`The new volume is ${this.volumeTV}`);
  }
}

const samsungTV = new TV("Samsung", 3, 43);
console.log(samsungTV);
// {brandTV: 'Samsung', channelTV: 3, volumeTV: 43}
samsungTV.increaseVolume();

class SmartTV extends TV {
  constructor(brandSmartTV, channelSmartTV, volumeSmartTV, hasNetflix = true) {
    super(brandSmartTV, channelSmartTV, volumeSmartTV);
    this.netflix = hasNetflix;
  }

  increaseVolume() {
    this.volumeTV += 10;
    console.log(`The new volume is ${this.volumeTV}`);
  }
}

const smartSamsungTV = new SmartTV("Samsung", 23, 20, false);
console.log(smartSamsungTV);
smartSamsungTV.increaseVolume();
