const cursor = document.querySelector('.cursor');

/*
    Study1.
        setAttribute는 선택한 요소(element)의 속성(attribute)값을 정하거나 변경한다.
        getAttribute는 선택한 요소(element)의 속성(attribute)값을 가져온다.
        hasAttribute는 선택한 요소(element)의 속성(attribute)의 존재를 확인한다.
        removeAttribute는 선택한 요소(element)의 속성(attribute) 값을 제거한다.
*/

window.addEventListener('mousemove', (e) => {
    cursor.style.left = e.pageX+ "px" ;
    cursor.style.top = e.pageY+ "px";
    cursor.setAttribute('data-fromTop', (cursor.offsetTop - scrollY));
    
});

window.addEventListener('scroll', () => {
    const fromTop = parseInt(cursor.getAttribute('data-fromTop'));
    cursor.style.top = scrollY + fromTop + "px";
});

/*
    Study2.
        void 연산자는 주어진 표현식을 평가하고 undefined를 반환한다.

*/

/*
    Study3.
       	1. classList.add( ): 지정한 클래스 값을 추가한다.
        2. classList.remove( ) : 지정한 클래스 값을 제거한다.
        3. classList.item( Number ) : 콜렌션의 인덱스를 이용하여 클래스 값을 반환한다.
        4. classList.toggle( ) : 클래스가 존재하면 제거하고 false를 반환, 존재하지 않으면 클래스를 추가하고 true를 반환  
        5. classList.contains( ) : 지정한 클래스 값이 엘리먼트의 class 속성에 존재하는지 확인한다.
        6. classList.replact( ) : 존재하는 클래스를 새로운 클래스로 교체한다.
*/
window.addEventListener('click', () => {
    if(cursor.classList.contains('click')){
        cursor.classList.remove('click');

        void cursor.offsetWidth;
        cursor.classList.add('click');
    } else {
        cursor.classList.add('click');
    }
})