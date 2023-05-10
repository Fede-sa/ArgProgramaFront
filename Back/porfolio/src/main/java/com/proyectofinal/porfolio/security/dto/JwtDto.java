
package com.proyectofinal.porfolio.security.dto;

import java.util.Collection;
import org.springframework.security.core.GrantedAuthority;


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

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public String getBearer() {
        return bearer;
    }

    public void setBearer(String bearer) {
        this.bearer = bearer;
    }

    public String getNombreUsurio() {
        return nombreUsurio;
    }

    public void setNombreUsurio(String nombreUsurio) {
        this.nombreUsurio = nombreUsurio;
    }

    public Collection<? extends GrantedAuthority> getAuthorities() {
        return authorities;
    }

    public void setAuthorities(Collection<? extends GrantedAuthority> authorities) {
        this.authorities = authorities;
    }
    
    
    
}
