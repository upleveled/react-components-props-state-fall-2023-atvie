import PropTypes from 'prop-types';

function BlogPost(props) {
  return (
    <>
      <h1>{props.title}</h1>
      <div>Blog Nr: {props.blogPostNumber}</div>
      <div>{props.children}</div>
    </>
  );
}

BlogPost.propTypes = {
  title: PropTypes.string.isRequired,
  blogPostNumber: PropTypes.number.isRequired,
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};

export default function ExamplePropTypes() {
  return (
    <div>
      <BlogPost title="Blog about Animals" blogPostNumber={1}>
        <img
          src="https://media.wired.com/photos/593261cab8eb31692072f129/master/w_2560%2Cc_limit/85120553.jpg"
          alt="animal pic"
          width={200}
        />
        <div>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Id aliquet
          risus feugiat in ante. Nunc congue nisi vitae suscipit tellus mauris.
          Ultrices sagittis orci a scelerisque purus semper eget duis at. Arcu
          felis bibendum ut tristique. Lorem dolor sed viverra ipsum. Venenatis
          cras sed felis eget velit aliquet. Ullamcorper morbi tincidunt ornare
          massa eget. Sed egestas egestas fringilla phasellus faucibus
          scelerisque eleifend donec pretium. In fermentum et sollicitudin ac
          orci phasellus egestas tellus. Vel elit scelerisque mauris
          pellentesque pulvinar pellentesque habitant morbi tristique."
        </div>
      </BlogPost>

      <BlogPost title="Blog about Food" blogPostNumber={2}>
        <div>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Id aliquet
          risus feugiat in ante. Nunc congue nisi vitae suscipit tellus mauris.
          Ultrices sagittis orci a scelerisque purus semper eget duis at. Arcu
          felis bibendum ut tristique. Lorem dolor sed viverra ipsum. Venenatis
          cras sed felis eget velit aliquet. Ullamcorper morbi tincidunt ornare
          massa eget. Sed egestas egestas fringilla phasellus faucibus
          scelerisque eleifend donec pretium. In fermentum et sollicitudin ac
          orci phasellus egestas tellus. Vel elit scelerisque mauris
          pellentesque pulvinar pellentesque habitant morbi tristique."
        </div>
      </BlogPost>
    </div>
  );
}
