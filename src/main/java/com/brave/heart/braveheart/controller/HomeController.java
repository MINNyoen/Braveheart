package com.brave.heart.braveheart.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

@RestController
@RequestMapping("/")
public class HomeController {
    
    @RequestMapping("")
    public ModelAndView GalleryPage(HttpServletRequest request, HttpServletResponse response) {
        ModelAndView mv = new ModelAndView("index");
        return mv;
    }

    @RequestMapping("main/terms/ko")
    public ModelAndView TermsPage(HttpServletRequest request, HttpServletResponse response) {
        ModelAndView mv = new ModelAndView("terms");
        return mv;
    }

    @RequestMapping("main/privacy/ko")
    public ModelAndView PrivacyPage(HttpServletRequest request, HttpServletResponse response) {
        ModelAndView mv = new ModelAndView("privacy");
        return mv;
    }
}
