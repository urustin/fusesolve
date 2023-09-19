# mail_handler.py

import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText

def send_email(name, lname, email, phone, message):
    msg = MIMEMultipart()
    msg['From'] = 'urustin@naver.com'
    msg['To'] = 'admin@flaresolution.com'
    msg['Subject'] = '[FUSESOLVE] Someone sent a message from the website'
    
    body = f"""
    First Name : {name} <br />
    Last Name : {lname} <br />
    Email : {email} <br />
    Phone : {phone} <br />
    Message : {message} <br />
    """
    
    msg.attach(MIMEText(body, 'html'))

    try:
        server = smtplib.SMTP('smtp.naver.com', 587) 
        server.starttls()  
        server.login('urustin', 'spDlfdlf24!@$') 
        text = msg.as_string()
        server.sendmail('urustin@naver.com', 'admin@flaresolution.com', text)
        server.quit()
        return "Email sent successfully", 200
    except Exception as e:
        return f"Failed to send email: {e}", 500
    finally:
        try:
            server.close()
        except Exception as e:
            return f"Failed to send email: {e}", 500




