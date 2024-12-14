
import LayoutAdmin from "@/components/layout/LayoutAdmin"
export default function MyProfile() {

	return (
		<>

			<LayoutAdmin headerStyle={1} footerStyle={1}>
				<section className="profile-dashboard">
					<form action="/" className="edit-profile">
						<div className="inner-header mb-40">
							<h3 className="title">My Profile</h3>
							<p className="des">There are many variations of passages of Lorem Ipsum</p>
						</div>
						<div className="upload-image-dashboard flex mb-80">
							<span className="title-avata">Avatar:</span>
							<div className="upload-image-wrap">
								<div className="avata relative">
									<img id="frame" src="/assets/images/page/update-profile.jpg" alt="image" />
									<div className="icon-delete">
										<i className="icon-delete-1" />
									</div>
								</div>
								<span className="upload">Upload a new Avatar</span>
								<div className="upload-file">
									<input type="file" />
								</div>
								<p>Png, Jpg, Svg dimenson (300* 350) max file not more then size 4 mb</p>
							</div>
						</div>
						<div className="infomation-dashboard mb-70">
							<h4 className="title">User Information</h4>
							<div className="widget-dash-board">
								<div className="grid-input-2">
									<div className="input-wrap">
										<label>First name</label>
										<input type="text" placeholder="Mehedii" />
									</div>
									<div className="input-wrap">
										<label>Last Name</label>
										<input type="text" placeholder="Hassan" />
									</div>
									<div className="input-wrap">
										<label>Phone</label>
										<input type="tel" placeholder={+8801739495504} />
									</div>
									<div className="input-wrap">
										<label>Email address*</label>
										<input type="email" placeholder="Useronly21@gmail.com" />
									</div>
								</div>
							</div>
						</div>
						<div className="infomation-dashboard mb-70">
							<h4 className="title">password Change Request</h4>
							<div className="widget-dash-board">
								<div className="grid-input-2">
									<div className="input-wrap">
										<label>New Password</label>
										<input type="password" placeholder="Mehedii" />
									</div>
									<div className="input-wrap">
										<label>Re-type New Password</label>
										<input type="password" placeholder="Hassan" />
									</div>
								</div>
								<p className="mt-20">*Note: you can change your password up to 10 times in a year</p>
							</div>
						</div>
						<div className="infomation-dashboard mb-70">
							<h4 className="title">Social Profile Link</h4>
							<div className="widget-dash-board">
								<div className="grid-input-3">
									<div className="input-wrap">
										<label><i className="icon-Vector-211" />Facebook</label>
										<input type="url" placeholder="Www.facebook.com/username" />
									</div>
									<div className="input-wrap">
										<label><i className="icon-Group-131" />Instagram</label>
										<input type="url" placeholder="Www.instagram.com/user" />
									</div>
									<div className="input-wrap">
										<label><i className="icon-twitter-sign-1" />Twitter</label>
										<input type="url" placeholder="Www.Twitter.com/user" />
									</div>
									<div className="input-wrap">
										<label><i className="icon-Group-141" />Dribble</label>
										<input type="url" placeholder="Www.dribble.com/user" />
									</div>
									<div className="input-wrap">
										<label><i className="icon-linkedin-1" />Linkedin</label>
										<input type="url" placeholder="Www.linkedin.com/user" />
									</div>
									<div className="input-wrap">
										<label><i className="icon-Layer-2-1" />Skype</label>
										<input type="url" placeholder="@skype.me/12244hassan" />
									</div>
								</div>
							</div>
						</div>
						<div className="otp-dashboard">
							<div className="checkbox-otp mb-60">
								<input id="check-otp" type="checkbox" name="check" defaultValue="check" />
								<label htmlFor="check-otp">I agree to Terms &amp; Conditions, Refund Policy and Privacy
									Policy of Fabrilife.</label>
							</div>
							<h4 className="title">Verify is it you?</h4>
							<span className="send-otp">Sent OTP to this number</span>
							<div className="input-wrap mb-45">
								<input type="tel" placeholder={"01723983923"} />
							</div>
							<div className="flex-three">
								<div className="button-wrap">
									<button type="submit" className="save"><i className="icon-Vector-221" />Save
										changes</button>
									<button type="reset" className="reset"><i className="icon-reply-all" />Reset
										All</button>
								</div>
							</div>
						</div>
					</form>
				</section>

			</LayoutAdmin>
		</>
	)
}