   let count = 10;
        
        function increment() {
            count+=10;
            document.getElementById('count').innerText = count;
        }
        
        function reset() {
            count = 0;
            document.getElementById('count').innerText = count;
        }