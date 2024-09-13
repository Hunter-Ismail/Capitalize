function capitalize(...text) {

    // Handle empty input
    if (text.length === 0) return '';

    return text.map(word => {
        // Trim whitespace and handle empty words
        word = word.trim();
        if (word.length === 0) return '';
    
        // Handle multi-word inputs
        return word.split(' ').map(subWord => 
            subWord.charAt(0).toUpperCase() + subWord.slice(1).toLowerCase()
        ).join(' ');
    }).join(' ').trim();
}


// Usage
console.log(capitalize('hunter', 'ismail')); // Hunter Ismail
console.log(capitalize('hello world')); // Hello World
console.log(capitalize('this is a test')); // This Is A Test
console.log(capitalize('UPPERCASE', 'lowercase', 'MiXeD')); // Uppercase Lowercase Mixed
console.log(capitalize('  multiple   spaces  ')); // Multiple Spaces
console.log(capitalize('')); // ''
console.log(capitalize('a')); // A


function capitalize(...text) {
   
    return text.map(word => 
        word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    ).join(' ');
};
