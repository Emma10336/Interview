// Array of blog post objects
const blogPosts = [
    {
      image: '/assets/images/blogimage1.jpg',
      title: 'Blog Post 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed augue lacus viverra vitae congue eu consequat. Lectus quam id leo in vitae turpis massa sed. Imperdiet nulla malesuada pellentesque elit eget gravida. At augue eget arcu dictum varius duis at. Vestibulum lectus mauris ultrices eros in. Posuere ac ut consequat semper. Consectetur adipiscing elit duis tristique sollicitudin. Massa ultricies mi quis hendrerit dolor magna eget. Bibendum est ultricies integer quis auctor elit sed vulputate mi. Ac tortor vitae purus faucibus. Congue nisi vitae suscipit tellus mauris. In vitae turpis massa sed elementum tempus egestas sed. Ut lectus arcu bibendum at varius vel pharetra vel. Et ultrices neque ornare aenean. Rhoncus aenean vel elit scelerisque mauris. Leo duis ut diam quam nulla porttitor massa id neque.'
    },
    {
      image: '/assets/images/bikerimage.jpg',
      title: 'Blog Post 2',
      description: 'Sed enim ut sem viverra aliquet eget sit amet tellus. Amet cursus sit amet dictum sit amet justo donec. Mollis nunc sed id semper risus. Adipiscing commodo elit at imperdiet dui accumsan. Nisl purus in mollis nunc sed id semper. Id neque aliquam vestibulum morbi blandit cursus risus. Bibendum est ultricies integer quis auctor elit sed vulputate. Enim lobortis scelerisque fermentum dui faucibus in ornare quam. Enim eu turpis egestas pretium aenean pharetra magna. Quis imperdiet massa tincidunt nunc pulvinar sapien et ligula. Duis at consectetur lorem donec massa. Velit ut tortor pretium viverra suspendisse potenti nullam ac tortor. Nulla aliquet porttitor lacus luctus. Tempus egestas sed sed risus. Habitant morbi tristique senectus et netus et malesuada fames. A diam sollicitudin tempor id. Massa vitae tortor condimentum lacinia quis vel eros donec.'
    },
    {
      image: '/assets/images/minimalisticimage.jpg',
      title: 'Blog Post 3',
      description: 'Proin libero nunc consequat interdum. Aliquam purus sit amet luctus venenatis lectus magna fringilla. Lacinia at quis risus sed. Ornare arcu dui vivamus arcu felis bibendum ut. Habitasse platea dictumst vestibulum rhoncus est pellentesque elit. Leo urna molestie at elementum. Nibh ipsum consequat nisl vel pretium lectus quam. Vitae justo eget magna fermentum iaculis eu non diam phasellus. Pulvinar sapien et ligula ullamcorper malesuada proin. Eu nisl nunc mi ipsum faucibus vitae. Quis ipsum suspendisse ultrices gravida dictum fusce ut placerat orci. Risus commodo viverra maecenas accumsan. Dolor morbi non arcu risus. Tristique et egestas quis ipsum suspendisse ultrices. Neque laoreet suspendisse interdum consectetur libero id faucibus nisl tincidunt. Consequat ac felis donec et odio pellentesque.'
    },
    {
      image: '/assets/images/blogimage1.jpg',
      title: 'Blog Post 4',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed augue lacus viverra vitae congue eu consequat. Lectus quam id leo in vitae turpis massa sed. Imperdiet nulla malesuada pellentesque elit eget gravida. At augue eget arcu dictum varius duis at. Vestibulum lectus mauris ultrices eros in. Posuere ac ut consequat semper. Consectetur adipiscing elit duis tristique sollicitudin. Massa ultricies mi quis hendrerit dolor magna eget. Bibendum est ultricies integer quis auctor elit sed vulputate mi. Ac tortor vitae purus faucibus. Congue nisi vitae suscipit tellus mauris. In vitae turpis massa sed elementum tempus egestas sed. Ut lectus arcu bibendum at varius vel pharetra vel. Et ultrices neque ornare aenean. Rhoncus aenean vel elit scelerisque mauris. Leo duis ut diam quam nulla porttitor massa id neque.'
    },
    {
      image: '/assets/images/bikerimage.jpg',
      title: 'Blog Post 5',
      description: 'Sed enim ut sem viverra aliquet eget sit amet tellus. Amet cursus sit amet dictum sit amet justo donec. Mollis nunc sed id semper risus. Adipiscing commodo elit at imperdiet dui accumsan. Nisl purus in mollis nunc sed id semper. Id neque aliquam vestibulum morbi blandit cursus risus. Bibendum est ultricies integer quis auctor elit sed vulputate. Enim lobortis scelerisque fermentum dui faucibus in ornare quam. Enim eu turpis egestas pretium aenean pharetra magna. Quis imperdiet massa tincidunt nunc pulvinar sapien et ligula. Duis at consectetur lorem donec massa. Velit ut tortor pretium viverra suspendisse potenti nullam ac tortor. Nulla aliquet porttitor lacus luctus. Tempus egestas sed sed risus. Habitant morbi tristique senectus et netus et malesuada fames. A diam sollicitudin tempor id. Massa vitae tortor condimentum lacinia quis vel eros donec.'
    },
    {
      image: '/assets/images/minimalisticimage.jpg',
      title: 'Blog Post 6',
      description: 'Proin libero nunc consequat interdum. Aliquam purus sit amet luctus venenatis lectus magna fringilla. Lacinia at quis risus sed. Ornare arcu dui vivamus arcu felis bibendum ut. Habitasse platea dictumst vestibulum rhoncus est pellentesque elit. Leo urna molestie at elementum. Nibh ipsum consequat nisl vel pretium lectus quam. Vitae justo eget magna fermentum iaculis eu non diam phasellus. Pulvinar sapien et ligula ullamcorper malesuada proin. Eu nisl nunc mi ipsum faucibus vitae. Quis ipsum suspendisse ultrices gravida dictum fusce ut placerat orci. Risus commodo viverra maecenas accumsan. Dolor morbi non arcu risus. Tristique et egestas quis ipsum suspendisse ultrices. Neque laoreet suspendisse interdum consectetur libero id faucibus nisl tincidunt. Consequat ac felis donec et odio pellentesque.'
    }
  
  ];
  
  // Function to create and display blog posts (Parent Element)
  function displayBlogPosts() {
    let blogList = document.getElementById('blog-list');
  
    // Clear any existing posts
    blogList.innerHTML = '';
  
    // Create and append blog post elements
    blogPosts.forEach((post, index) => {
      const listItem = document.createElement('li');
      const heading = document.createElement('h2');
      const description = document.createElement('p');
      const image = document.createElement('img');
      const readMoreLink = document.createElement('a');
  
      heading.textContent = post.title;

      const truncatedDescription = post.description.substring(0, 100) + '...';
      description.textContent = truncatedDescription;
      readMoreLink.textContent = 'Read More';

      //An event listener is added to trigger the message box showing the full description
      readMoreLink.addEventListener('click', () => {
        alert(post.description);
      });

      image.src = post.image;
      
      //Adding the elements created (child elements) within the parent elements
      listItem.appendChild(image);
      listItem.appendChild(heading);
      listItem.appendChild(description);
      listItem.appendChild(readMoreLink);
  
      blogList.appendChild(listItem);
    });
  }
  
  // Call the function to display the blog posts
  displayBlogPosts();
  