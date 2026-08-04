package com.portfolio.backend.service;

import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

@Service
public class EmailService {

    private final JavaMailSender mailSender;

    // This reads YOUR email from application.properties
    @Value("${spring.mail.username}")
    private String myEmail;

    public EmailService(JavaMailSender mailSender) {
        this.mailSender = mailSender;
    }

    public void sendContactEmail(String name,
            String senderEmail,
            String message) throws MessagingException {

        MimeMessage mimeMessage = mailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(mimeMessage, true, "UTF-8");

        // FROM → your Gmail (required by Gmail)
        helper.setFrom(myEmail);

        // TO → your Gmail (you receive it)
        helper.setTo(myEmail);

        // REPLY-TO → recruiter email
        // so when you click Reply → goes to recruiter
        helper.setReplyTo(senderEmail);

        // Subject
        helper.setSubject("Portfolio Contact from " + name);

        // Email body (HTML)
        String body = """
                <h2>New message from your Portfolio!</h2>
                <p><b>Name:</b> %s</p>
                <p><b>Email:</b> <a href="mailto:%s">%s</a></p>
                <p><b>Message:</b></p>
                <p>%s</p>
                """.formatted(name, senderEmail, senderEmail,
                message.replace("\n", "<br>"));

        helper.setText(body, true); // true = HTML

        // Send!
        mailSender.send(mimeMessage);
    }
}