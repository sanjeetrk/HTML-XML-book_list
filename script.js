document.addEventListener('DOMContentLoaded', function() {
    // Assuming the XML data is stored as a string for this example
    const xmlString = `
<catalog>
    <!-- English Fiction Books -->
    <book language="English" category="Fiction">
        <title>To Kill a Mockingbird</title>
        <author>Harper Lee</author>
        <year>1960</year>
        <price>7.99</price>
    </book>
    <book language="English" category="Fiction">
        <title>1984</title>
        <author>George Orwell</author>
        <year>1949</year>
        <price>6.99</price>
    </book>
    <book language="English" category="Fiction">
        <title>The Great Gatsby</title>
        <author>F. Scott Fitzgerald</author>
        <year>1925</year>
        <price>8.99</price>
    </book>
    <book language="English" category="Fiction">
        <title>Moby Dick</title>
        <author>Herman Melville</author>
        <year>1851</year>
        <price>9.50</price>
    </book>

    <!-- English Non-Fiction Books -->
    <book language="English" category="Non-Fiction">
        <title>Sapiens: A Brief History of Humankind</title>
        <author>Yuval Noah Harari</author>
        <year>2011</year>
        <price>15.00</price>
    </book>
    <book language="English" category="Non-Fiction">
        <title>The Immortal Life of Henrietta Lacks</title>
        <author>Rebecca Skloot</author>
        <year>2010</year>
        <price>14.00</price>
    </book>
    <book language="English" category="Non-Fiction">
        <title>The Diary of a Young Girl</title>
        <author>Anne Frank</author>
        <year>1947</year>
        <price>10.00</price>
    </book>
    <book language="English" category="Non-Fiction">
        <title>In Cold Blood</title>
        <author>Truman Capote</author>
        <year>1966</year>
        <price>11.50</price>
    </book>

    <!-- Hindi Fiction Books -->
    <book language="Hindi" category="Fiction">
        <title>Gunahon Ka Devta</title>
        <author>Dharamvir Bharati</author>
        <year>1949</year>
        <price>5.95</price>
    </book>
    <book language="Hindi" category="Fiction">
        <title>Raag Darbari</title>
        <author>Shrilal Shukla</author>
        <year>1968</year>
        <price>7.00</price>
    </book>
    <book language="Hindi" category="Fiction">
        <title>Chandrakanta</title>
        <author>Devaki Nandan Khatri</author>
        <year>1888</year>
        <price>6.25</price>
    </book>
    <book language="Hindi" category="Fiction">
        <title>Madhushala</title>
        <author>Harivansh Rai Bachchan</author>
        <year>1935</year>
        <price>4.75</price>
    </book>

    <!-- Hindi Non-Fiction Books -->
    <book language="Hindi" category="Non-Fiction">
        <title>Bharat Mata Ki Jai</title>
        <author>Shashi Tharoor</author>
        <year>2018</year>
        <price>12.00</price>
    </book>
    <book language="Hindi" category="Non-Fiction">
        <title>Discovery of India</title>
        <author>Jawaharlal Nehru</author>
        <year>1946</year>
        <price>13.50</price>
    </book>
    <book language="Hindi" category="Non-Fiction">
        <title>Satyarth Prakash</title>
        <author>Swami Dayanand Saraswati</author>
        <year>1875</year>
        <price>8.50</price>
    </book>
</catalog>`;

    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xmlString, "text/xml");

    window.updateBooks = function() {
        const language = document.getElementById('language').value;
        const category = document.getElementById('category').value;
        const books = xmlDoc.getElementsByTagName('book');
        let output = '';

        for (let i = 0; i < books.length; i++) {
            const book = books[i];
            if ((book.getAttribute('language') === language || language === '') &&
                (book.getAttribute('category') === category || category === '')) {
                output += `
                <div>
                    <h3>${book.getElementsByTagName('title')[0].textContent}</h3>
                    <p>Author: ${book.getElementsByTagName('author')[0].textContent}</p>
                    <p>Year: ${book.getElementsByTagName('year')[0].textContent}</p>
                    <p>Price: $${book.getElementsByTagName('price')[0].textContent}</p>
                </div>`;
            }
        }

        document.getElementById('bookDetails').innerHTML = output;
    };
});
