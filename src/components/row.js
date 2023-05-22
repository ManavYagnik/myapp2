
function Row() {
    return (
      <div className="Row">
        <div class="row">
  <div class="col-3 col-s-3 menu">
    <ul>
      <li>How to create and nest components</li>
      <li>How to add markup and styles</li>
      <li>How to display data</li>
      <li>How to render conditions and lists</li>
      <li>How to respond to events and update the screen</li>
      <li>How to share data between components</li>
    </ul>
  </div>

  <div class="col-6 col-s-9">
    <h1>React</h1>
    <p>The library for web and native user interfaces.React lets you build user interfaces out of individual pieces called components. Create your own React components like 
        Thumbnail, LikeButton, and Video. Then combine them into entire screens, pages, and apps.
        Whether you work on your own or with thousands of other developers, using React feels the same. It is designed to let you 
        seamlessly combine components written by independent people, teams, and organizations.</p>
  </div>

  <div class="col-3 col-s-12">
    <div class="aside">
    <h1>Thinking in React</h1>

React can change how you think about the designs you look at and the apps you build. 
When you build a user interface with React, you will first break it apart into pieces 
called components. Then, you will describe the different visual states for each of your
 components. Finally, you will connect your components together so that the data flows 
 through them. In this tutorial, we’ll guide 
you through the thought process of building a searchable product data table with React.
    </div>
  </div>
</div>
        

      </div>
    );
  }
  
  export default Row;
