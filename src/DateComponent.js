import React from 'react';

class DateComponent extends React.Component {

    render() {
      var dateObj = new Date();
      var month = dateObj.getUTCMonth() + 1; //months from 1-12
      var day = dateObj.getUTCDate();
      var year = dateObj.getUTCFullYear();

      var newdate = year + "/" + month + "/" + day;

        return (

          newdate
        );
    }
}
export default DateComponent;
