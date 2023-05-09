
package com.proyectofinal.porfolio.security.dto;

import java.util.Collection;
import lombok.Getter;
import lombok.Setter;
import org.springframework.security.core.GrantedAuthority;

@Getter @Setter
public class JwtDto {
    
    private String token;
    private String bearer = "Bearer";
    private String nombreUsurio;
    private Collection<? extends GrantedAuthority> authorities;

    public JwtDto(String token, String nombreUsurio, Collection<? extends GrantedAuthority> authorities) {
        this.token = token;
        this.nombreUsurio = nombreUsurio;
        this.authorities = authorities;
    }
    
    
    
}
