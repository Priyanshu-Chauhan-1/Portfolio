package com.portfolio.backend.controller;

import com.portfolio.backend.service.EmailService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/contact")
@CrossOrigin(origins = "*")
public class ContactController {

    // inject EmailService
    private final EmailService emailService;

    public ContactController(EmailService emailService) {
        this.emailService = emailService;
    }

    public record ContactRequest(
            String name,
            String email,
            String message) {
    }

    @PostMapping
    public ResponseEntity<?> submitContact(@RequestBody ContactRequest request) {

        try {
            // send email
            emailService.sendContactEmail(
                    request.name(),
                    request.email(),
                    request.message());

            System.out.println("Email sent successfully from: " + request.email());

            return ResponseEntity.ok(Map.of(
                    "status", "success",
                    "message", "Your message has been sent!"));

        } catch (Exception e) {
            System.out.println("Failed to send email: " + e.getMessage());

            return ResponseEntity.internalServerError().body(Map.of(
                    "status", "error",
                    "message", "Failed to send message. Please try again."));
        }
    }
}