<!DOCTYPE html>
<html>
  <head>
    <title>My Form</title>
  </head>
  <body>
    <form>
      <label for="email">Email:</label>
      <input type="email" id="email" name="email"><br><br>

      <label for="password">Password:</label>
      <input type="password" id="password" name="password"><br><br>

      <label for="github-username">Github Username:</label>
      <input type="text" id="github-username" name="github-username"><br><br>

      <label>Subscription Plan:</label><br>
      <input type="radio" id="enterprise" name="subscription-plan" value="enterprise">
      <label for="enterprise">Enterprise</label><br>
      <input type="radio" id="pro" name="subscription-plan" value="pro">
      <label for="pro">Pro</label><br>
      <input type="radio" id="free" name="subscription-plan" value="free">
      <label for="free">Free</label><br><br>

      <label for="remember-me">Remember Me:</label>
      <input type="checkbox" id="remember-me" name="remember-me"><br><br>

      <button type="submit" onclick="resetForm()">Submit</button>
    </form>

    <script>
      function resetForm() {
        document.querySelector("form").reset();
      }
    </script>
  </body>
</html>
