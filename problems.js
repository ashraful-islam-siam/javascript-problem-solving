// লুডু খেলায় আমরা কিভাবে ১ থেকে ৬ সংখ্যা রেন্ডমলি প্রিন্ট করতে পারি

const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

console.log(getRandomNumber(1, 6));

// কি ভাবে আমরা আমাদের শ্রেনীকক্ষে নাম Alphabetically সাজাতে পারি?

const students = ["Sumit", "Saad", "Daiyan", "Akash"];
console.log(students.sort());

// কিভাবে আমরা আমাদের শ্রেনীকক্ষের সকলের রোল নাম্বার ক্রম অনুযায়ী সাজাতে পারি?

const roll_numbers = [1, 2, 5, 3, 4, 6, 8, 7, 9, 10];

console.log(roll_numbers.sort((a, b) => a - b));

// কোনো সাল Leap Year কিনা তা বের করতে পারি কিভাবে?

function isLeapYear(year) {
  if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
    console.log(`${year} is a leap year`);
  } else {
    console.log(`${year} is not a leap year`);
  }
}

isLeapYear(2000);

// কোনো sentence এ কতোগুলো vowel আছে তা নির্ণয় করা যায় কি ভাবে?
const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

function countVowels(sentence) {
    let count = 0;
    const letters = Array.from(sentence);

    letters.forEach(value => {
        if(vowels.includes(value)) {
            count++
        }
    })

    return count;
}

console.log(countVowels("I love someone"))

// কোনো Array থেকে duplicate নাম্বার গুলোকে কিভাবে বের করে আনতে পারি? 

const numbers = [1, 4, 5, 6, 6, 7,8, 9, 10, 4];

const duplicates = numbers.filter((value, index, array) => {
    return array.indexOf(value) !== index
})

console.log(duplicates)