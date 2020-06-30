import Component from "@glimmer/component";
import ENV from "scheduling-widget/config/environment";

export default class GoogleMapStaticComponent extends Component {
  get token() {
    return encodeURIComponent(ENV.GOOGLE_MAPS_API_KEY);
  }

  get src() {
    let api =
      "https://maps.googleapis.com/maps/api/staticmap?&style=feature:poi|visibility:off&size=220x170&markers=color:0x0088cc|";

    let address = `${this.args.office.street} ${this.args.office.city} ${this.args.office.state} ${this.args.office.zip}`;

    // address = encodeURIComponent(address);

    // let address = "510 Arizona Ave Santa Monica CA 90401";

    let url = `${api}${address}&key=${this.token}`;

    return url;
  }
}
