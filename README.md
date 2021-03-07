# 💻 30submit
### HTML과 CSS, Vanila JavaScript로 진행 한 30개 과제

<br />
<br />

## This Challenge is started on 2020-12-12 📅

### Day-1: Custom Cursor
### Day-2: Theme Switcher
### Day-3: Random Joke
### Day-4: Numbers API
### Day-5: Countdown Timer
### Day-6: Featured Section
### Day-7: Photo Gallery app UI
### Day-8: Photo Gallery app Js
### Day-9: Read More Button
### Day-10: Making a Key Code Generator App
### Day-11: CSS animated Navigation Menu Bar
### Day-12: CSS Flex Gallery
### Day-13: Analog Clock
### Day-14: Digital Clock
### Day-15: Random Color Generator
### Day-16: Basic Tooltip
### Day-17: Scroll Down Button

<br />
<br />

## 📈 학습 내용 또는 이슈
### 🔍 1. Attribute 
```
    1. setAttribute는 선택한 요소(element)의 속성(attribute)값을 정하거나 변경한다.
    2. getAttribute는 선택한 요소(element)의 속성(attribute)값을 가져온다.
    3. hasAttribute는 선택한 요소(element)의 속성(attribute)의 존재를 확인한다.
    4. removeAttribute는 선택한 요소(element)의 속성(attribute) 값을 제거한다.
```

<br />

### 🔍 2. fetch
```javascript
    fetch(API_URL, {
        headers: {
            'Accept' : 'application/json'
        }
    })
    .then(res => res.json())
    .then(data => {
        content.innerHTML = data.joke;
    });
``` 

<br />

### 🔍 3. async/await
```javascript
    async fetchImages(baseURL) {
        const response = await fetch(baseURL, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                Authorization: this.API_KEY,
            }
        });
        const data = await response.json();

        return data;
    }
```

<br />

### 🔍 4. button 눌렀을 때 해당 요소만 클래스 추가하고 나머지 요소들은 클래스 제거하기
```javascript
    const items = document.querySelectorAll('.item');
    items.forEach(item => {
        item.addEventListener('click', () => {
            items.forEach(item => {
                item.classList.remove('show');
            })
            item.classList.add('show');
        });
    });
```
<br />

### 🔍 5. Date객체를 이용한 시간 얻기
```javascript
    const date = new Date;
    const secDeg = date.getSeconds();
    const minDeg = date.getMinutes();
    const hourDeg = date.getHours();
```

<br />