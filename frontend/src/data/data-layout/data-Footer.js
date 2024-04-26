import {FooterLogo} from '../../utils/allImgs'

export const footerLogo = FooterLogo

const Li_A = ({IcoName, link}) => <li><a href={link}><i className={IcoName} aria-hidden="true"></i></a></li>
export const IcoName = [
	{IcoName:'fa fa-facebook',link: "https://www.facebook.com/databeast_ai"},
	{IcoName:'fa fa-twitter',link:"https://twitter.com/databeast_ai"},
	{IcoName:'fa fa-google-plus'},
	{IcoName:'fa fa-instagram',link:"https://www.instagram.com/databeast_ai"},
	{IcoName:'fa fa-linkedin'}
]

export const NameNav = [
	{nameNav:'Advertisers'},
	{nameNav:'Developers'},
	{nameNav:'Resources'},
	{nameNav:'Company'},
	{nameNav:'Connect'}
]

export const NamePriTos = [
	{namePriTos:'Advertiser Agreement'},
	{namePriTos:'Acceptable Use Policy'},
	{namePriTos:'Privacy Policy'},
	{namePriTos:'Technology Privacy'},
	{namePriTos:'Developer Agreement'}
]

export const NamePhone = [
	{namePhone:'Mailing Address:xx00 E. Union Ave'},
	{namePhone:'Suite 1100. Denver, CO 80237'},
	{namePhone:'+999 90932 627'},
	{namePhone:'support@yourdomain.com'}
]