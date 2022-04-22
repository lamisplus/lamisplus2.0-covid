package org.lamisplus.modules.covid.config;


import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@Configuration
@EnableJpaRepositories(basePackages = {"org.lamisplus.modules.covid.repository"})
public class DomainConfiguration {
}
