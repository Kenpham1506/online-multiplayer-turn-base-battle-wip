document.addEventListener("DOMContentLoaded", function () {
	const params = new URLSearchParams(window.location.hash.substring(1));
	const accessToken = params.get("access_token");
	const error = params.get("error");
	const errorCode = params.get("error_code");
	const errorDescription = params.get("error_description");
	const emailVerified = params.get("email_verified");

	const statusTitle = document.getElementById("status-title");
	const statusMessage = document.getElementById("status-message");
	const dashboardLink = document.getElementById("dashboard-link");
	const retryLink = document.getElementById("retry-link");

	if (accessToken) {
		statusTitle.textContent = "Account Verified!";
		statusMessage.textContent = "Your account has been successfully verified. You can now log in.";
	} else if (error) {
		statusTitle.textContent = "Verification Failed!";
		statusMessage.innerHTML = `<strong>Error:</strong> ${error} <br> <strong>Code:</strong> ${errorCode} <br> <strong>Description:</strong> ${decodeURIComponent(errorDescription)}`;
	} else {
		statusTitle.textContent = "Unknown Status";
		statusMessage.textContent = "We couldn't determine your account status. Please try again. Or contact pham150603@gmail.com for support";
	}
});
