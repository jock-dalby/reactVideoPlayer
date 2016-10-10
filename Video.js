var React = require('react');

var Video = React.createClass({
  render: function () {
    return (
      <div>
        <video src={this.props.src} controls autostart autoplay />
      </div>
    );
  }
});

module.exports = Video;
