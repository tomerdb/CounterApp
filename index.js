   let count = 1000;
        
        function increment() {
            count+=2;
            document.getElementById('count').innerText = count;
        }
        
        function reset() {
            count = 0;
            document.getElementById('count').innerText = count;
        }